import { Server } from "./serverType.js";

// Service logic, singleton
class Service {
    private static service: Service;
    private server: Server;

    // Constructor
    private constructor() {
        this.server = this.generateServer();
    }

    // Global access point
    public static getService(): Service {
        if (!Service.service) {
            Service.service = new Service();
        }
        return Service.service;
    }

    // Assign values to server.modules
    private generateServer(): Server {
        // Placeholder
        return new Server();
    }

    // $ lucy init
    // public initialization(): void {}
}

// File related jobs
// Network related jobs: fetch api, download, etc.

export { Service };
