 BEGIN ;
 create table wheels ( 
 id SERIAL PRIMARY KEY , 
 Company varchar (15) NOT NULL, 
 Mesure varchar NOT NULL, 
 Quantity integer NOT NULL , 
 Speedcode VARCHAR NOT NULL, 
 MODEL varchar NOT NULL );   



 INSERT INTO wheels (Company,Mesure,Quantity,Speedcode,MODEL) VALUES('MICHLEEN','118/150',25,'speed1','cx3');
  INSERT INTO wheels (Company,Mesure,Quantity,Speedcode,MODEL) VALUES('Contental','180/150',3,'speed2','c4');
   INSERT INTO wheels (Company,Mesure,Quantity,Speedcode,MODEL) VALUES('MICHLEEN','124/210',11,'speed3','c15');
    INSERT INTO wheels (Company,Mesure,Quantity,Speedcode,MODEL) VALUES('maxis','118/150',19,'speed5','cx12');


COMMIT;