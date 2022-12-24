class URLManagerStore {
  public getHomeURL() {return '/'}
  public getLoginURL() {return '/auth/login'}
  public getRegistrationURL() {return '/auth/registration'}
  public getCafeItemURL(id: number) {return `/cafe/${id}`}
  public getBasketURL() {return `/basket`}
  public getOrderURL() {return `history/order`}
  public getSettingsURL() {return `/settings`}
  public getHistoryURL() {return `/history`}
  public getProfileURL() {return `/profile`}
}

const URLManager = new URLManagerStore();

export { URLManager };
