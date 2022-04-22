import type { User } from '@/models/user';
export const userAdapter = (user: unknown): User => {
    const { id, name, lastName, email, password, role, createdAt, updatedAt } = user as User;
    return {
        id,
        name,
        last_name: lastName,
        email,
        password,
        role,
        createdAt,
        updatedAt,
    };
}