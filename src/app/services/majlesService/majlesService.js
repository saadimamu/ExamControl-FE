import axios from 'axios';
import FuseUtils from '@fuse/FuseUtils';

class majlesService extends FuseUtils.EventEmitter {

    getMajlesById = (id) => {
        return new Promise((resolve, reject) => {
            axios.get('http://localhost:21021/api/services/app/Majles/GetMajlesById',{
                params: {
                    id
                }
            })
            .then(response => {
                if ( response.data.success)
                {
                    resolve(response.data.result);
                }
                else
                {
                    reject(response.data.error);
                }
            });
        });
    };

    getMajales = () => {
        return new Promise((resolve, reject) => {
            axios.get('http://localhost:21021/api/services/app/Majles/GetAll')
                .then(response => {
                    if ( response.data.success)
                    {
                        resolve(response.data.result);
                    }
                    else
                    {
                        reject(response.data.error);
                    }
                });
        });
    }

    createMajles = (majles) => {
        return new Promise((resolve, reject) => {
            axios.post('http://localhost:21021/api/services/app/Majles/Create', majles)
                .then(response => {
                    if ( response.data.success )
                    {
                        resolve(response.data.result);
                    }
                    else
                    {
                        reject(response.data.error);
                    }
                });
        });
    };

    updateMajles = (majles) => {
        return new Promise((resolve, reject) => {
            axios.put('http://localhost:21021/api/services/app/Majles/Update', {
                majles: majles
                })
                .then(response => {
                    if ( response.data.success )
                    {
                        resolve("Majles was successfully updated !! ");
                    }
                    else
                    {
                        reject(response.data.error);
                    }
                });
        });
    };

    deleteMajles = (id) => {
        return new Promise((resolve, reject) => {
            axios.post('http://localhost:21021/api/services/app/Majles/Delete', { 
                params: {
                    id
                }})
                .then(response => {
                    if ( response.data.success )
                    {
                        resolve("Majles was successfully deleted !! ");
                    }
                    else
                    {
                        reject(response.data.error);
                    }
                });
        });
    };
}

const instance = new majlesService();

export default instance;
