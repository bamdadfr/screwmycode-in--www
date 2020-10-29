export interface IScale {
    default: number;
    front: number;
}

export interface IMouse {
    x: number;
    y: number;
    spring: number;
}

export interface ICameraSettings {
    angle1: number;
    angle2: number;
    scale: number;
}

export interface ICamera {
    position: {
        x: number;
        y: number;
        z: number;
    };
    lookAt(x: number, y: number, z: number): void;
}

export interface IContainer {
    clientWidth: number;
    clientHeight: number;
    appendChild: {(domElement: void): void;};
}

export interface IPropsScale {
    scale: IScale;
}

export interface IMeshes {
    backgroundGroup: object;
    frontGroup: object;
}

