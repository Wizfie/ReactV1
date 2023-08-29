package project.restfull.Restfull.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import project.restfull.Restfull.entity.Address;
import project.restfull.Restfull.entity.Contact;
import project.restfull.Restfull.entity.User;

import java.util.Optional;

@Repository
public interface AddressRepository extends JpaRepository<Address , String> {
    Optional<Address> findFirstByContactAndId(Contact contact, String Id);
}

