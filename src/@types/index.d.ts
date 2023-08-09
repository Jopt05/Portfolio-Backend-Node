export interface IProyecto extends Document {
    project_name: string;
    project_description: string;
    project_technologies: Schema.Types.ObjectId[];
    project_topic: number;
    project_state?: boolean;
    project_url: string;
}

export interface IServicio extends Document {
    service_name: string;
    service_description: string;
    service_topic: number;
    service_image: string;
    service_state?: boolean;
}

export interface ITecnologia extends Document {
    tech_name: string;
    state?: boolean;
}

export interface IUsuario extends Document {
    user_name: string;
    password: string;
    string: correo
}