import axios from 'axios';
import FuseUtils from '@fuse/FuseUtils';

class majalesTypeService extends FuseUtils.EventEmitter {

    ListAll = (id) => {
        return new Promise((resolve, reject) => {
            axios.get('http://localhost:21021/api/services/app/MajlesTypes/GetListAll')
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
}

const instance = new majalesTypeService();

export default instance;
