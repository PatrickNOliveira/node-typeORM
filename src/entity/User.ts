const { IsDefined, IsEmail } = require('class-validator')
const { Entity, PrimaryGeneratedColumn, Column } = require('typeorm')

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', nullable: false })
    @IsDefined({
      message: 'Nome é obrigatório !'
    })
    nome: string;

    @Column({ type: 'varchar', nullable: false })
    @IsDefined({
      message: 'Sobrenome é obrigatório !'
    })
    sobrenome: string;

    @Column({ type: 'varchar', nullable: false, unique: true })
    @IsDefined({
      message: 'Email é obrigatório !'
    })
    @IsEmail({}, {
      message: 'Envie um e-mail válido!'
    })
    email: string;

    @Column({ type: 'varchar', nullable: false })
    @IsDefined({
      message: 'Senha é obrigatório !'
    })
    senha: string;
}
