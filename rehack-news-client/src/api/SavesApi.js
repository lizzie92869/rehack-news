class SavesApi {

  static requestHeaders() {
    return {'AUTHORIZATION': `Bearer ${sessionStorage.jwt}`}
  }

  // static getAllSaves(user) {
    // return fetch(`/api/v1/users/${user.id}/saves`)
  static getAllSaves(user) {
    const headers = this.requestHeaders();
    const request = new Request(`http://localhost:3001/api/v1/users/1/saves`, {
      method: 'GET',
      headers: headers
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default SavesApi;
