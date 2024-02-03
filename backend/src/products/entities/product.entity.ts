import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    product_id: number;

    @Column()
    product_name: string;

    @Column()
    description: string;

    @Column()
    price: number;

    @Column()
    image_id: number;

    @Column()
    category_id: number;
}