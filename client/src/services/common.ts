const common = {
    getEnv: (key: any)=> {
        return import.meta.env[key];
    }
}

export default common;