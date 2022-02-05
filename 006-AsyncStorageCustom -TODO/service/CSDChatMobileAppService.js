import {UserInfo} from '../entity/UserInfo.js';
import {CSDChatAppHelper} from '../dal/CSDChatAppHelper.js';

class CSDChatMobileAppService {
    constructor(chatAppHelper) {
        this._chatAppHelper = chatAppHelper;
    }

    async saveUser(userInfo) {
        const user = await this._chatAppHelper.saveUser(userInfo);
        return new Promise((resolve, reject) => {
            resolve(user)
            reject('CSDChatMobileAppService.saveUser');
        });
    }

    async updateUserDate(userInfo) {
        //...
        return await this._chatAppHelper.updateUserDate(userInfo);
    }

    deleteAllUsers() {
        //...
        return this._chatAppHelper.deleteAllUsers();
    }

    exitsUserByUsername(username) {
        //...
        return this._chatAppHelper.existsUserByUsername(username);
    }

    async getUserById(id) {
        const user = await this._chatAppHelper.getUserById(id)
        return new Promise((resolve, reject) => {
            resolve(user)
            reject('CSDChatMobileAppService.saveUser');
        });
    }

    getUserIdByUsername(username) {
        return this._chatAppHelper.getUserIdByUserName(username);
    }

    async getAllUsers() {
        //...
        return await this._chatAppHelper.getAllUsers();
    }

    static getInstance() {
        return g_chatAppMobileService;
    }
}

const g_chatAppMobileService = new CSDChatMobileAppService(CSDChatAppHelper.getInstance());

export {CSDChatMobileAppService};
