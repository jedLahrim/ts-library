import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Link extends BaseEntity{
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column()
    shortUrl: string;
    @Column()
    originalUrl: string;
}