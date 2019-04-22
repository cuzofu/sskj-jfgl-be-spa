import { stringify } from 'qs';
import request from '@/utils/request';

export async function queryProject(params) {
  return request(`/api/project?${stringify(params)}`);
}

export async function removeProject(params) {
  return request('/api/project', {
    method: 'POST',
    data: {
      ...params,
      method: 'delete',
    },
  });
}

export async function addProject(params) {
  return request('/api/project', {
    method: 'POST',
    data: {
      ...params,
      method: 'post',
    },
  });
}

export async function updateProject(params = {}) {
  return request(`/api/project?${stringify(params.query)}`, {
    method: 'POST',
    data: {
      ...params.body,
      method: 'update',
    },
  });
}
