import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.TOKEN || "wahyupunya123";

export const generateToken = async (userId: string) => {
  return jwt.sign({ userId }, SECRET_KEY, {
    expiresIn: "1h",
  });
};

export const verifyToken = (token: string): any => {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (error: any) {
    throw new Error("Invalid token");
  }
};
