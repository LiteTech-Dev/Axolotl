interface ServerModule {
    name: string;
}

class Server {
    modules: { [key: string]: ServerModule } = {};
    pluginPaths: string[] = [];

    addModule(module: ServerModule) {
        this.modules[module.name] = module;
        if (module instanceof Mcdr) {
            this.addPluginPaths(module.pluginPaths);
        }
    }

    private addPluginPaths(paths: string[] | string) {
        if (Array.isArray(paths)) {
            this.pluginPaths.push(...paths);
        } else {
            this.pluginPaths.push(paths);
        }
    }
}

class Mcdr implements ServerModule {
    name = "mcdr";
    pluginPaths: string[] | string;
    serverPath: string;

    constructor(pluginPaths: string[] | string, serverPath: string) {
        this.pluginPaths = pluginPaths;
        this.serverPath = serverPath;
    }
}

class Fabric implements ServerModule {
    name = "fabric";
    version: string;

    constructor(version: string) {
        this.version = version;
    }
}

class Forge implements ServerModule {
    name = "forge";
    version: string;

    constructor(version: string) {
        this.version = version;
    }
}

class NeoForge extends Forge {
    name = "neoforge";
}

export { Server, Mcdr, Fabric, Forge, NeoForge };
