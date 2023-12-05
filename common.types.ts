// common.types.ts
import { User, Session } from "next-auth";

// Định nghĩa một kiểu cho trạng thái của một biểu mẫu
export type FormState = {
    title: string;
    description: string;
    image: string;
    liveSiteUrl: string;
    githubUrl: string;
    category: string;
};

// Định nghĩa một giao diện cho một dự án, mở rộng từ kiểu FormState
export interface ProjectInterface {
    title: string;
    description: string;
    image: string;
    liveSiteUrl: string;
    githubUrl: string;
    category: string;
    id: string;
    createdBy: {
        name: string;
        email: string;
        avatarUrl: string;
        id: string;
    };
}

// Định nghĩa một giao diện cho hồ sơ người dùng
export interface UserProfile {
    id: string;
    name: string;
    email: string;
    description: string | null;
    avatarUrl: string;
    githubUrl: string | null;
    linkedinUrl: string | null;
    projects: {
        edges: { node: ProjectInterface }[];
        pageInfo: {
            hasPreviousPage: boolean;
            hasNextPage: boolean;
            startCursor: string;
            endCursor: string;
        };
    };
}

// Định nghĩa một giao diện cho một phiên, mở rộng từ kiểu Session của next-auth
export interface SessionInterface extends Session {
    user: User & {
        id: string;
        name: string;
        email: string;
        avatarUrl: string;
    };
}

// Định nghĩa một giao diện cho biểu mẫu dự án
export interface ProjectForm {
    title: string;
    description: string;
    image: string;
    liveSiteUrl: string;
    githubUrl: string;
    category: string;
}
