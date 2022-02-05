import {UserInfoRepository} from '../repository/UserInfoRepository.js';

class CSDChatAppHelper {
    constructor(userInfoRepository) {
        this._userInfoRepository = userInfoRepository;
    }

    async saveUser(userInfo) {
        const user = await this._userInfoRepository.save(userInfo);
        return new Promise((resolve, reject) => {
            resolve(user)
            reject('CSDChatAppHelper.saveUser');
        });
    }

    deleteAllUsers() {
        this._userInfoRepository.deleteAll();
    }

    async updateUserDate(userInfo) {
        //...
        return await this._userInfoRepository.updateDate(userInfo);
    }

    exitsUserByUsername(username) {
        //...
        return this._userInfoRepository.existsByUsername(username);
    }

    async getUserById(id) {
        const user = await this._userInfoRepository.findById(id);
        return new Promise((resolve, reject) => {
            resolve(user)
            reject('CSDChatAppHelper.saveUser');
        });
    }

    getUserIdByUserName(username) {
        return this._userInfoRepository.findUserIdByUserName(username);
    }

    async getAllUsers() {
        const users = await this._userInfoRepository.getAll();
        return users;
    }

    static getInstance() {
        return g_chatAppHelper;
    }
}


const g_chatAppHelper = new CSDChatAppHelper(UserInfoRepository.getInstance());

export {CSDChatAppHelper};
