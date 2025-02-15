interface JwtConstants {
  secret: string;
  expiresIn: string;
}

export const jwtConstants: JwtConstants = {
  secret:
    process.env.JWT_SECRET ||
    "80j699458hj38l51k2lim9k290j1j58i12616mhk5i96157805268l7l3m9h4m42i1758185k3534h7698l5439j07jl7mj3k2lkj17659447li0m0376223h7jlj20i",
  expiresIn: process.env.JWT_EXPIRES_IN || "1d",
};
