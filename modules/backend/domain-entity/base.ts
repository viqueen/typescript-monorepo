interface Entity {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    removedAt: Date | null;
}

export type { Entity };
