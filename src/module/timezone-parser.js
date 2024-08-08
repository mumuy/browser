export default {
    name:'timezone',
    parse(){
        return {};
    },
    async getInfo(){
        let timezone = Intl?.DateTimeFormat()?.resolvedOptions()?.timeZone;

        return {
            timezone
        };
    }
}