import axios from 'axios';
import FuseUtils from '@fuse/FuseUtils';

class meetingService extends FuseUtils.EventEmitter {

    getUser = (id) => {
        return new Promise((resolve, reject) => {
            axios.get('http://localhost:21021/api/services/app/Meeting/ListAll')
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

const instance = new meetingService();

export default instance;
