export interface JwtResponse {
  access_token: string;
}

export interface Payload {
  sub: string;
  username: string;
}
