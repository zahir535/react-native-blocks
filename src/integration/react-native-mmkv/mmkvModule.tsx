import { MMKV } from "react-native-mmkv";

export interface customizedStorageInstanceProps {
  userId: string;
  userDirectory: string;
}

export const defaultStorageInstance = new MMKV();

export const customizedStorageInstance = ({ userId, userDirectory }: customizedStorageInstanceProps) => {
  const storage = new MMKV({
    id: `user-${userId}-storage`,
    path: `${userDirectory}/storage`,
    encryptionKey: "hunter2",
  });

  return storage;
};

// MMKV use case https://github.com/mrousavy/react-native-mmkv/tree/master/docs
// MMKV with redux-persist
// MMKV with react-query
// etc
