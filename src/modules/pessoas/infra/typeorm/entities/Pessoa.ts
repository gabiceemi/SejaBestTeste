import { v4 as uuidV4 } from "uuid";

import { 
  Entity,
  Column, 
  OneToMany, 
  CreateDateColumn, 
  PrimaryColumn
} from "typeorm";

import { Fone } from "../../../../fones/infra/entities/Fone";

@Entity("pessoas")
export class Pessoa {
  @PrimaryColumn()
  id!: string;

  @Column()
  nome!: string;

  @Column()
  sobrenome!: string;

  @OneToMany(() => Fone, fone => fone.pessoa)
  fones!: Fone[];

  @CreateDateColumn()
  created_at!: Date;

  constructor() {
    if(!this.id) {
        this.id = uuidV4();
    }
  }
}