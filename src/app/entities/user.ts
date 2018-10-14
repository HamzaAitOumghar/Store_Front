import { UserPayment } from "./user-payment";
import { UserShipping } from "./user-shipping";

export class User {
    public id: number;
    public username: string;
    public password: string;
    public firstName: string;
    public lastName: string;
    public email: string;
    public phone: string;
    public enable: boolean;
    public userPayments : UserPayment[];
    public userShippings : UserShipping[];



}
