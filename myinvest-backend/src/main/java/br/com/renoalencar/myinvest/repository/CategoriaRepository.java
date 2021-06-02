package br.com.renoalencar.myinvest.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.renoalencar.myinvest.domain.Categoria;

public interface CategoriaRepository extends JpaRepository<Categoria, Long> {
	
}
