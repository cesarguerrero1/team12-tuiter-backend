import AccountType from "./AccountType";
import MaritalStatus from "./MaritalStatus";
import Location from "./Location";
import mongoose from "mongoose";
import Admin from "../admins/Admin";

export default interface User {
    _id?: mongoose.Schema.Types.ObjectId,
    username: string,
    password: string,
    email: string,
    firstName?: string,
    lastName?: string,
    profilePhoto?: string,
    headerImage?: string,
    biography?: string,
    dateOfBirth?: Date,
    accountType?: AccountType,
    maritalStatus?: MaritalStatus,
    location?: Location,
    salary?: number,
    isBlocked?: boolean,
    blockedBy?: Admin
};