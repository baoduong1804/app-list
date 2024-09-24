type RootStackParamList = {
    Home: undefined;
    Detail: {id:number,title:string,star:number,image:string};
    about : {userName: string, passWord:string,urlAvatar:string} | undefined;
  };