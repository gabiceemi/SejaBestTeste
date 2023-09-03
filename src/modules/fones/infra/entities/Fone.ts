import { v4 as uuidV4 } from "uuid";

import { 
  Column, 
  CreateDateColumn, 
  Entity, 
  JoinColumn, 
  ManyToOne, 
  PrimaryColumn 
} from "typeorm";

import { Pessoa } from "../../../pessoas/infra/typeorm/entities/Pessoa";

@Entity("fones")
export class Fone {
  @PrimaryColumn()
  id!: string;

  @Column()
  codigo!: string;

  @Column()
  numero!: string;

  @Column()
  isCelular!: boolean;

  @ManyToOne(() => Pessoa)
  @JoinColumn({name: "pessoa_id"})
  pessoa?: Pessoa;

  @Column()
  pessoa_id!: string;

  @CreateDateColumn()
  created_at!: Date;

  constructor() {
    if(!this.id) {
        this.id = uuidV4();
    }
  }
}