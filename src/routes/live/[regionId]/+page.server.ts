export const load = async (serverLoadEvent) => {
    const { fetch, params } = serverLoadEvent;
    const { regionId } = params;
    return {
        regionId
    };
};