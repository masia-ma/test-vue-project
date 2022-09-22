import request from '@/utils/umiRequest';

/**
 * 查询所有车辆
 * @returns Promise
 */
 export async function getAllVehicleApi() {
  return request('/api/map/vehicle', { method: 'get', ignoreHttpErrorCatch: true });
  // return request('/api/map/vehicle', { method: 'get' });
}


/**
 * 查询所有车辆
 * @returns Promise
 */
 export async function testApi() {
  return request('http://192.145.23.1/agent/agentStatusList', { method: 'get'});
}

/**
 * getDesignResourceListApi
 * @returns Promise
 */
 export async function getDesignResourceListApi() {
  return request('/ui-platform/design-resource/front-list', { method: 'post'});
}

/**
 * getDesignResourceDetailApi
 * @returns Promise
 */
 export async function getDesignResourceDetailApi() {
  return request('/ui-platform/design-resource/detail', { method: 'get', params: {
    id: 2
  } });
}

