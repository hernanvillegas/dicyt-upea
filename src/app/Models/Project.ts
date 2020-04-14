export interface ProjectInterface{
    project_code?:string;
    project_name?:string;
    investment_amount?:string;
    start_date?: Date;
    ending_date?: Date;
    state?:number;
}