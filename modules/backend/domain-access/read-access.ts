import { Entity } from '@monorepo-be/domain-entity';

interface EntityReadAccess<TEntity extends Entity> {
    findById(id: string): Promise<TEntity | null>;
}

export type { EntityReadAccess };
