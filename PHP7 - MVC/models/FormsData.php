<?php

/**
 * Projeto Desenvolvido para a Atividade 1 - Formulário de Cadastro
 *
 * Curso Sistemas Interativos WEB
 *
 * Prof. Rudinei Goularte (rudinei@icmc.usp.br)
 *
 * ICMC USP 2018
 *
 * Preview Project: https://forms.galhardoo.com
 *
 * Source Code: https://github.com/AlexGalhardo/Trabalho-Formulario
 *
 * Alex Galhardo Vieira
 * Github: https://github.com/AlexGalhardo	
 * Email: aleexgvieira@gmail.com / alexgalhardo@usp.br
 * Site: https://galhardoo.com
 */

class FormsData extends model {

	/**
	 * Método para adicionar dados do formulário dados pessoais no banco de dados
	 * @param  [type] $nome          [description]
	 * @param  [type] $email         [description]
	 * @param  [type] $celular       [description]
	 * @param  [type] $genero        [description]
	 * @param  [type] $estadoCivil   [description]
	 * @param  [type] $nacionalidade [description]
	 * @param  [type] $cpf           [description]
	 * @return [type]                [description]
	 */
	public function adicionarDadosPessoais($nome, $email, $celular, $genero, $estadoCivil, $nacionalidade, $cpf) {
		
		$sql = "INSERT INTO dados_pessoais (nome, email, celular, genero, estadoCivil, nacionalidade, cpf) VALUES (:nome, :email, :celular,:genero, :estadoCivil, :nacionalidade, :cpf)";

		$sql = $this->db->prepare($sql);
		$sql->bindValue(":nome", $nome);
		$sql->bindValue(":email", $email);
		$sql->bindValue(":celular", $celular);
		$sql->bindValue(":genero", $genero);
		$sql->bindValue(":estadoCivil", $estadoCivil);
		$sql->bindValue(":nacionalidade", $nacionalidade);
		$sql->bindValue(":cpf", $cpf);

		$sql->execute();

		return true;
	}

	/**
	 * Deletar uma linha inteira de um dado pessoal de acordo com o ID passado no paramêtro
	 * @param  [type] $id [description]
	 * @return [type]     [description]
	 */
	public function deleteDadoPessoal($id){
		$sql = "DELETE FROM dados_pessoais WHERE id = :id";
		$sql = $this->db->prepare($sql);
		$sql->bindValue(":id", $id);
		$sql->execute();
	}

	/**
	 * Devolve um array de arrays com todas as linhas de dados pessoais cadastrado no banco
	 * @return [type] [description]
	 */
	public function getDadosPessoaisCadastrados(){
		/**
		 * Pegue todas as linhas com todas as colunas do banco de dados
		 * @var $sql == array()
		 */
		$sql = "SELECT * FROM dados_pessoais";
		/**
		 * Faça essa query no banco de dados
		 */
		$sql = $this->db->query($sql);
		if($sql->rowCount() > 0){
			return $sql->fetchAll();
		} else {
			return array();
		}
	}

	public function getDadoPessoalCadastradoFromId($id){

		$sql = "SELECT * FROM dados_pessoais WHERE id = :id";

		$sql = $this->db->prepare("$sql");
		$sql->bindValue(":id", $id);

		$sql->execute();

		if($sql->rowCount() == 1){
			return $sql->fetch();
		} else {
			return array();
		}
	}

	public function updateDadosPessoais($id, 
		                                $nome, 
		                                $email, 
		                                $celular, 
		                                $genero, 
		                                $estadoCivil, 
		                                $nacionalidade, 
		                                $cpf){

		$sql = "UPDATE dados_pessoais SET 
		                              nome = :nome, 
		                              email = :email,
		                              celular = :celular,
		                              genero = :genero,
		                              estadoCivil = :estadoCivil,
		                              nacionalidade = :nacionalidade,
		                              cpf = :cpf
		                              WHERE id = :id";

		$sql = $this->db->prepare($sql);
		$sql->bindValue(":id", $id);
		$sql->bindValue(":nome", $nome);
		$sql->bindValue(":email", $email);
		$sql->bindValue(":celular", $celular);
		$sql->bindValue(":genero", $genero);
		$sql->bindValue(":estadoCivil", $estadoCivil);
		$sql->bindValue(":nacionalidade", $nacionalidade);
		$sql->bindValue(":cpf", $cpf);

		$sql->execute();

		return true;
	}


    /****************************************************************************/
	/**
	 * Adiciona dados do formulário Endereço dentro do banco de dados
	 * @param  [type] $rua              [description]
	 * @param  [type] $bairro           [description]
	 * @param  [type] $numeroResidencia [description]
	 * @return [type]                   [description]
	 */
	public function adicionarDadosEndereco($name,
										   $rua, 
		                                   $bairro, 
		                                   $numeroResidencia) {
		$sql = "INSERT INTO dados_endereco (name, rua, bairro, numeroResidencia) VALUES (:name, :rua, :bairro, :numeroResidencia)";

		$sql = $this->db->prepare($sql);
		$sql->bindValue(":name", $name);
		$sql->bindValue(":rua", $rua);
		$sql->bindValue(":bairro", $bairro);
		$sql->bindValue(":numeroResidencia", $numeroResidencia);

		$sql->execute();

		return true;
	}

	public function deleteDadoEndereco($id){
		$sql = "DELETE FROM dados_endereco WHERE id = :id";
		$sql = $this->db->prepare($sql);
		$sql->bindValue(":id", $id);
		$sql->execute();
	}

	public function getDadosEnderecoCadastradosFromId($id){

		$sql = "SELECT * FROM dados_endereco WHERE id = :id";

		$sql = $this->db->prepare($sql);
		$sql->bindValue(":id", $id);

		$sql->execute();

		if($sql->rowCount() == 1){
			return $sql->fetch();
		} else {
			return array();
		}
	}

	public function getDadosEnderecoCadastrados(){
		/**
		 * Pegue todas as linhas com todas as colunas do banco de dados
		 * @var $sql == array()
		 */
		$sql = "SELECT * FROM dados_endereco";
		/**
		 * Faça essa query no banco de dados
		 */
		$sql = $this->db->query($sql);
		if($sql->rowCount() > 0){
			return $sql->fetchAll();
		} else {
			return array();
		}
	}
	
	public function updateDadosEndereco($id, 
		                                $rua, 
		                                $bairro,
		                                $numeroResidencia){

		$sql = "UPDATE dados_endereco SET 
		                              rua = :rua, 
		                              bairro = :bairro,
		                              numeroResidencia = :numeroResidencia
		                              WHERE id = :id";

		$sql = $this->db->prepare($sql);
		$sql->bindValue(":id", $id);
		$sql->bindValue(":rua", $rua);
		$sql->bindValue(":bairro", $bairro);
		$sql->bindValue(":numeroResidencia", $numeroResidencia);

		$sql->execute();

		return true;
	}


	/***************************************************************************/
	public function adicionarDadosInteresseVaga($cargo, 
		                                        $experiencia, 
		                                        $regiaoInteresse, 
		                                        $pretensaoSalarial) {

		$sql = "INSERT INTO dados_interesse_vaga (cargo, experiencia, regiaoInteresse, pretensaoSalarial) VALUES (:cargo, :experiencia, :regiaoInteresse, :pretensaoSalarial)";

		$sql = $this->db->prepare($sql);
		$sql->bindValue(":cargo", $cargo);
		$sql->bindValue(":experiencia", $experiencia);
		$sql->bindValue(":regiaoInteresse", $regiaoInteresse);
		$sql->bindValue(":pretensaoSalarial", $pretensaoSalarial);

		$sql->execute();

		return true;

	}

	public function deleteDadoInteresseVaga($id){
		$sql = "DELETE FROM dados_interesse_vaga WHERE id = :id";
		$sql = $this->db->prepare($sql);
		$sql->bindValue(":id", $id);
		$sql->execute();
	}

	public function getInteresseDeVagaCadastrados(){
		/**
		 * Pegue todas as linhas com todas as colunas do banco de dados
		 * @var $sql == array()
		 */
		$sql = "SELECT * FROM dados_interesse_vaga";
		/**
		 * Faça essa query no banco de dados
		 */
		$sql = $this->db->query($sql);
		if($sql->rowCount() > 0){
			return $sql->fetchAll();
		} else {
			return array();
		}
	}

	public function getInteresseDeVagaCadastradoFromId($id){

		$sql = "SELECT * FROM dados_interesse_vaga WHERE id = :id";

		$sql = $this->db->prepare($sql);
		$sql->bindValue(":id", $id);
		$sql->execute();

		if($sql->rowCount() == 1){
			return $sql->fetch();
		} else {
			return array();
		}
	}

	public function updateDadosInteresseDeVagaCadastrado($id,
		                                                 $cargo, 
		                                                 $experiencia, 
		                                                 $regiaoInteresse, 
		                                                 $pretensaoSalarial){

		$sql = "UPDATE dados_interesse_vaga SET
	                                       cargo = :cargo, 
	                                       experiencia = :experiencia,
	                                       regiaoInteresse = :regiaoInteresse,
	                                       pretensaoSalarial = :pretensaoSalarial
		                                    WHERE id = :id";
        
        $sql = $this->db->prepare($sql);

        $sql->bindValue(":id", $id);
        $sql->bindValue(":cargo", $cargo);
        $sql->bindValue(":experiencia", $experiencia);
        $sql->bindValue(":regiaoInteresse", $regiaoInteresse);
        $sql->bindValue(":pretensaoSalarial", $pretensaoSalarial);

        $sql->execute();

        return true;
	}


	/****************************************************************/
	public function adicionarDadosEducacao($escolaridade, 
										   $anoFormacao, 
										   $nomeInstituicao, 
										   $nomeCurso) {


		$sql = "INSERT INTO dados_educacao (escolaridade, 
		                                    anoFormacao, 
		                                    nomeInstituicao, 
		                                    nomeCurso) 
		        VALUES ( :escolaridade, 
		                 :anoFormacao, 
		                 :nomeInstituicao, 
		                 :nomeCurso)";

		$sql = $this->db->prepare($sql);
		$sql->bindValue(":escolaridade", $escolaridade);
		$sql->bindValue(":anoFormacao", $anoFormacao);
		$sql->bindValue(":nomeInstituicao", $nomeInstituicao);
		$sql->bindValue(":nomeCurso", $nomeCurso);

		$sql->execute();

		return true;
	}

	/**
	 * UPDATE dados_educacao SET escolaridade = 'doutorado', anoFormacao = '2018',nomeInstituicao = 'usp',nomeCurso = 'bcc' WHERE id = '31';
	 */
	public function updateDadosEducacao($id, 
		                                $escolaridade, 
		                                $anoFormacao, 
		                                $nomeInstituicao, 
		                                $nomeCurso){

		$sql = "UPDATE dados_educacao SET 
		                              escolaridade = :escolaridade, 
		                              anoFormacao = :anoFormacao,
		                              nomeInstituicao = :nomeInstituicao,
		                              nomeCurso = :nomeCurso
		                              WHERE id = :id";

		$sql = $this->db->prepare($sql);
		$sql->bindValue(":id", $id);
		$sql->bindValue(":escolaridade", $escolaridade);
		$sql->bindValue(":anoFormacao", $anoFormacao);
		$sql->bindValue(":nomeInstituicao", $nomeInstituicao);
		$sql->bindValue(":nomeCurso", $nomeCurso);

		$sql->execute();

		return true;
	}

	public function deleteDadoEducacao($id){
		$sql = "DELETE FROM dados_educacao WHERE id = :id";
		$sql = $this->db->prepare($sql);
		$sql->bindValue(":id", $id);
		$sql->execute();
	}

	public function getEducacaoCadastrados(){
		/**
		 * Pegue todas as linhas com todas as colunas do banco de dados
		 * @var $sql == array()
		 */
		$sql = "SELECT * FROM dados_educacao";
		/**
		 * Faça essa query no banco de dados
		 */
		$sql = $this->db->query($sql);
		if($sql->rowCount() > 0){
			return $sql->fetchAll();
		} else {
			return array();
		}
	}

	public function getEducacaoCadastradosFromId($id){

		$sql = "SELECT * FROM dados_educacao WHERE id = :id";

		$sql = $this->db->prepare($sql);

		$sql->bindValue(":id", $id);

		$sql->execute();

		if($sql->rowCount() == 1){
			return $sql->fetch();
		} else {
			return array();
		}
	}

	public function adicionarDadosExperienciasProfissionais($possuiExperiencia, 
												            $nomeEmpresa, 
												            $inicioMes, 
												            $inicioAno, 
												            $fimMes, 
												            $fimAno, 
												            $segmentoDaEmpresa, 
												            $cargoQueOcupou, 
												            $textoResponsabilidades) {

		/**
		 * Se o usuário possui experiencia, adicione também os dados da experiência
		 */
		if($possuiExperiencia == 'Possui Experiência Profissional'){

			$sql = "INSERT INTO dados_experiencia_profissional (possuiExperiencia, 
			                                                    nomeEmpresa, 
			                                                    inicioMes, 
			                                                    inicioAno, 
			                                                    fimMes, 
			                                                    fimAno, 
			                                                    segmentoDaEmpresa, 
			                                                    cargoQueOcupou, 
			                                                    textoResponsabilidades) 
			        VALUES (:possuiExperiencia, 
			                :nomeEmpresa, 
			                :inicioMes, 
			                :inicioAno, 
			                :fimMes, 
			                :fimAno, 
			                :segmentoDaEmpresa, 
			                :cargoQueOcupou, 
			                :textoResponsabilidades)";

			$sql = $this->db->prepare($sql);

			$sql->bindValue(":possuiExperiencia", $possuiExperiencia);
			$sql->bindValue(":nomeEmpresa", $nomeEmpresa);
			$sql->bindValue(":inicioMes", $inicioMes);
			$sql->bindValue(":inicioAno", $inicioAno);
			$sql->bindValue(":fimMes", $fimMes);
			$sql->bindValue(":fimAno", $fimAno);
			$sql->bindValue(":segmentoDaEmpresa", $segmentoDaEmpresa);
			$sql->bindValue(":cargoQueOcupou", $cargoQueOcupou);
			$sql->bindValue(":textoResponsabilidades", $textoResponsabilidades);

			$sql->execute();

			return true;

		/**
		 * Se ele não possuir experiência, adicione apenas esta informação
		 */
		} else {
			$sql = "INSERT INTO dados_experiencia_profissional (possuiExperiencia) VALUES (:possuiExperiencia)";

			$sql = $this->db->prepare($sql);
			$sql->bindValue(":possuiExperiencia", $possuiExperiencia);

			$sql->execute();

			return true;
		}
	}

	public function updateDadosExperienciasProfissionais($id, 
		                                				 $possuiExperiencia, 
											             $nomeEmpresa, 
											             $inicioMes, 
											             $inicioAno, 
											             $fimMes, 
											             $fimAno, 
											             $segmentoDaEmpresa, 
											             $cargoQueOcupou, 
											             $textoResponsabilidades){

		$sql = "UPDATE dados_experiencia_profissional SET 
						                              possuiExperiencia = :possuiExperiencia, 
						                              nomeEmpresa = :nomeEmpresa,
						                              inicioMes = :inicioMes,
						                              inicioAno = :inicioAno,
						                              fimMes = :fimMes,
						                              fimAno = :fimAno,
						                              segmentoDaEmpresa = :segmentoDaEmpresa,
						                              cargoQueOcupou = :cargoQueOcupou,
						                              textoResponsabilidades = :textoResponsabilidades
						                              WHERE id = :id";

		$sql = $this->db->prepare($sql);
		$sql->bindValue(":id", $id);
		$sql->bindValue(":possuiExperiencia", $possuiExperiencia);
		$sql->bindValue(":nomeEmpresa", $nomeEmpresa);
		$sql->bindValue(":inicioMes", $inicioMes);
		$sql->bindValue(":inicioAno", $inicioAno);
		$sql->bindValue(":fimMes", $fimMes);
		$sql->bindValue(":fimAno", $fimAno);
		$sql->bindValue(":segmentoDaEmpresa", $segmentoDaEmpresa);
		$sql->bindValue(":cargoQueOcupou", $cargoQueOcupou);
		$sql->bindValue(":textoResponsabilidades", $textoResponsabilidades);

		$sql->execute();

		return true;
	}


	public function deleteDadoExperienciaProfissional($id){
		$sql = "DELETE FROM dados_experiencia_profissional WHERE id = :id";
		$sql = $this->db->prepare($sql);
		$sql->bindValue(":id", $id);
		$sql->execute();
	}


	/**
	 * Essa função devolve todas as linhas da tabela Experiencias Profissionais
	 * @return [array de arrays] [todas as linhas da tabela experiencia profissionais]
	 */
	public function getExperienciasProfissionaisCadastrados(){

		$sql = "SELECT * FROM dados_experiencia_profissional";

		$sql = $this->db->query($sql);
		if($sql->rowCount() > 0){
			return $sql->fetchAll();
		} else {
			return array();
		}

	}

	/**
	 * Essa função devolve um array com os dados de acordo com o ID
	 * @return  [array] [returna a linha da tabela que possuir o id do paramêtro]
	 */
	public function getExperienciaProfissionaiFromId($id){
		/**
		 * Pegue todas as linhas com todas as colunas do banco de dados
		 * @var $sql == array()
		 */
		$sql = "SELECT * FROM dados_experiencia_profissional WHERE id = :id";
		/**
		 * Faça essa query no banco de dados
		 */
		$sql = $this->db->prepare($sql);
		$sql->bindValue(":id", $id);
		$sql->execute();
		//$sql = $this->db->query($sql);
		if($sql->rowCount() == 1){
			return $sql->fetch();
		} else {
			return false;
		}
	}
}

?>