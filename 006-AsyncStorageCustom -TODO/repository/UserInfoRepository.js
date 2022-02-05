import AsyncStorage from '@react-native-async-storage/async-storage';

const keyPrefix = '@user';
const idKey = `@idKey`;

class UserInfoRepository {

    async save(userInfo) {
        if (!await this.existsByUsername(userInfo.username)) {
            const idValue = await AsyncStorage.getItem(idKey);
            const currentId = idValue == null ? 1 : parseInt(idValue) + 1;
            userInfo.id = currentId;
            await AsyncStorage.setItem(`${(keyPrefix)}:${currentId}`, JSON.stringify(userInfo));
            await AsyncStorage.setItem(idKey, JSON.stringify(currentId));
        }
        return new Promise((resolve, reject) => {
            resolve(userInfo);
            reject('UserInfoRepository.save');
        });
    }

    async deleteAll() {
        await AsyncStorage.clear();
        return new Promise((resolve, reject) => {
            reject('UserInfoRepository.save');
        });
    }

    async existUser(username, password) {
        const keys = await AsyncStorage.getAllKeys();
        if (keys.length == 0) {
            return false;
        }
        const users = await AsyncStorage.multiGet(keys.filter(p => p.startsWith(keyPrefix)));
        return users.map(p => JSON.parse(p[1])).findIndex(u => u._username == username && u._password == password) >= 0;
    }

    async findById(id) {
        const key = `${keyPrefix}:${id}`;
        const item = JSON.parse(await AsyncStorage.getItem(key));
        return new Promise((resolve, reject) => {
            resolve(item != null ? item : undefined)
            reject('UserInfoRepository.findById');
        });

    }

    async existsByUsername(username) {
        const keys = await AsyncStorage.getAllKeys();
        if (keys.length == 0) {
            return false;
        }
        const usersStr = (await AsyncStorage.multiGet(keys.filter(p => p.startsWith(keyPrefix))));
        const users = usersStr.map(p => JSON.parse(p[1]));
        return new Promise((resolve, reject) => {
            resolve(users.findIndex(ui => ui._username == username) >= 0)
            reject('UserInfoRepository.save');
        });
    }

    async findUserIdByUserName(username) {
        const keys = await AsyncStorage.getAllKeys();
        if (keys.length == 0) {
            return false;
        }
        const usersStr = await AsyncStorage.multiGet(keys.filter(p => p.startsWith(keyPrefix)));
        if (usersStr.length < 1) {
            return 0;
        }
        const users = usersStr.map(p => JSON.parse(p[1]));
        const index = users.findIndex(p => p._username = username);
        return new Promise((resolve, reject) => {
            resolve(uindex < 0 ? 0 : users[index].id)
            reject('UserInfoRepository.save');
        });

    }

    async updateDate(userInfo) {
        const user = await this.findById(userInfo._id);

        if (user == undefined) {
            return new Promise((resolve, reject) => {
                resolve(false)
                reject('UserInfoRepository.updateDate');
            });
        }
        user._lastUpdate = new Date();
        await AsyncStorage.setItem(`${keyPrefix}:${userInfo._id}`, JSON.stringify(user));
        return true;
        return new Promise((resolve, reject) => {
            resolve(true)
            reject('UserInfoRepository.updateDate');
        });

    }

    async getAll() {
        const keys = await AsyncStorage.getAllKeys();
        if (keys.length == 0) {
            return null;
        }
        const usersStr = (await AsyncStorage.multiGet(keys.filter(p => p.startsWith(keyPrefix))));
        const users = usersStr.map(p => JSON.parse(p[1]));
        return users;
    }

    static getInstance() {
        //...
        return g_userInfoRepository;
    }
}

const g_userInfoRepository = new UserInfoRepository();

const userInfoRepository = g_userInfoRepository;

export {UserInfoRepository, userInfoRepository};
