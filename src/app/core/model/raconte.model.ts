export class Raconte {
  id!: number;
  attributes!: {
    category: {
        data:{
            id: number;
            attributes: {
              name: string;
            };
        }
    };
    name: string;
    image: string;
    content: string;
    createdDate: Date;
    users_permissions_user:{
        data:{
            id:number,
            attributes:{
                username:string,
                descriptio: string,
                imgUrl: string,
            }
        }
    }
  };
}