import axios from "axios"
const testNewUIAPI = axios.create({
  baseURL: "https://test-new-ui-35738.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_v1_login_create(payload) {
  return testNewUIAPI.post(`/api/v1/login/`)
}
function api_v1_signup_create(payload) {
  return testNewUIAPI.post(`/api/v1/signup/`, payload)
}
function rest_auth_login_create(payload) {
  return testNewUIAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_list(payload) {
  return testNewUIAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return testNewUIAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return testNewUIAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return testNewUIAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return testNewUIAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return testNewUIAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return testNewUIAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_read(payload) {
  return testNewUIAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return testNewUIAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return testNewUIAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_v1_login_create,
  api_v1_signup_create,
  rest_auth_login_create,
  rest_auth_logout_list,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_read,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
