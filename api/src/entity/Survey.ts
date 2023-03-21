import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
} from "typeorm"


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
    @Column({nullable: true})
    childrens?: string;
    @Column({
        array: true,
        type: "enum",
        enum: [
        "With my parents", 
        "With my partner", 
        "With my childrens", 
        "With my brothers",
        "With my pet",
        "With my friend", 
        "Alone",
        "Other"
        ]
    })
    livesWith!: string[];
    @Column({
        array:true,
        type: "enum",
        enum: [
        "Working", 
        "Studing", 
        "Homeowner", 
        "Retired", "Looking for a job", 
        "Other"
        ],
    })
    occupation!: any[];
}