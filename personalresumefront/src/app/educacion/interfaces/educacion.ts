export interface Education {
    id:            string;
    degree:        string;
    description:   string;
    establishment: string;
    logo:          string;
    isDelete:      boolean;
    profile:       Profile;
}

export interface Profile {
    id:       string;
    name:     string;
    cv:       string;
    isDelete: boolean;
}

export interface EducationDto {
    degree:        string;
    description:   string;
    establishment: string;
    logo:          string;
    idProfile:     string;
}