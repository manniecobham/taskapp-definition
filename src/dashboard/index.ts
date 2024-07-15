import { allocationEntity } from "./entities/allocation-entity"
import { invoiceEntity } from "./entities/invoice-entity"
import { requesterEntity } from "./entities/requester-entity"
import { serviceProviderEntity } from "./entities/serviceprovider-entity"
import { taskEntity } from "./entities/task-entity"
import { userEntity } from "./entities/user-entity"

const dashboardEntityArray = [
    allocationEntity,
    invoiceEntity,
    requesterEntity,
    serviceProviderEntity,
    taskEntity, 
    userEntity
];

export {allocationEntity};
export {invoiceEntity};
export {requesterEntity};
export {serviceProviderEntity};
export {taskEntity };
export {userEntity};

export default dashboardEntityArray;