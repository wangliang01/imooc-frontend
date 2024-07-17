import Storage from "./storage";

const local = new Storage();

local.initNamespaceStorage("imooc");

export default local;