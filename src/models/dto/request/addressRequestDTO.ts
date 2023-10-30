export default interface AddressRequestDTO {
    id: number;
    userId: number,
    name: string,
    pincode:string,
    address:string,
    city:string,
    state:string,
    phoneNumber:string,
    isDefault:boolean,
}