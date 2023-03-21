import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
} from "typeorm"

// export type Role = "admin" | "user";
@Entity()
export class Survey {
    @PrimaryGeneratedColumn("uuid")
    id!: string;
    @Column()
    gender!: string;
    @Column()
    city!: string;
    @Column()
    commune!: string;
    @Column()
    punctuation!: number;
    @CreateDateColumn()
    createdAt!: Date;
    @Column("text", {array: true})
    livesWith?: string[];
    // @Column("text", {array: true})
    // occupation!: string[];
    // @Column({nullable: false})
    // childrens!: string;
}