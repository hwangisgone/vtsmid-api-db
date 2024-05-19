CREATE TABLE country (
	country_id	INT PRIMARY KEY,
	name		VARCHAR(100) NOT NULL
);

CREATE TABLE student (
	student_id	INT	PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	email		VARCHAR(100) UNIQUE NOT NULL,
	phone		VARCHAR(20),

	first_name	VARCHAR(100) NOT NULL,
	middle_name	VARCHAR(100) NOT NULL,
	last_name	VARCHAR(100) NOT NULL,

	birth_year	INT,
	sex 		INT, -- https://en.wikipedia.org/wiki/ISO_5218	0 unknown, 1 male, 2 female, 9 not applicable
	school		TEXT,
	country_id	INT REFERENCES country(country_id)
);

INSERT INTO country VALUES (1, 'Vietnam');
INSERT INTO country VALUES (2, 'Russian');

INSERT INTO student(email, phone, first_name, last_name, middle_name, birth_year, sex, school, country_id) VALUES ('anh.lmv.bkhn@gmail.com','0394305264','Anh','Lê','Minh Việt',null,1,'Đại học Bách Khoa Hà Nội',1);
INSERT INTO student(email, phone, first_name, last_name, middle_name, birth_year, sex, school, country_id) VALUES ('blu11235@gmail.com','0866859929','Bách','Phạm','Quang',null,1,'VinUniversity',1);
INSERT INTO student(email, phone, first_name, last_name, middle_name, birth_year, sex, school, country_id) VALUES ('bachdtm169@gmail.com','0983155487','Bảo','Hoàng','Bá','2004',1,'Đại học Bách Khoa Hà Nội',1);
INSERT INTO student(email, phone, first_name, last_name, middle_name, birth_year, sex, school, country_id) VALUES ('20020098@vnu.edu.vn','0967809494','Cường','Phạm','Minh',null,1,'Đại học Công nghệ - Đại học Quốc gia Hà Nội',1);
INSERT INTO student(email, phone, first_name, last_name, middle_name, birth_year, sex, school, country_id) VALUES ('truongvando1910@gmail.com','0963047046','Độ','Trương','Văn','2002',1,'Đại học Công nghệ - Đại học Quốc gia Hà Nội',1);
INSERT INTO student(email, phone, first_name, last_name, middle_name, birth_year, sex, school, country_id) VALUES ('bungnud113@gmail.com','0969698093','Dũng','Hoàng','Việt',null,1,'ITMO University',2);
INSERT INTO student(email, phone, first_name, last_name, middle_name, birth_year, sex, school, country_id) VALUES ('dung9d32k2@gmail.com','0981268318','Dũng','Bùi','Hoàng','2002',1,'Đại học Bách Khoa Hà Nội',1);
INSERT INTO student(email, phone, first_name, last_name, middle_name, birth_year, sex, school, country_id) VALUES ('bui123456trongdung@gmail.com','0931115699','Dũng','Bùi','Trọng','2002',1,'Đại học Bách Khoa Hà Nội',1);
INSERT INTO student(email, phone, first_name, last_name, middle_name, birth_year, sex, school, country_id) VALUES ('tranthuyduonghy2003@gmail.com','0376065504','Dương','Trần','Thùy','2003',2,'Đại học Công nghệ - Đại học Quốc gia Hà Nội',1);
INSERT INTO student(email, phone, first_name, last_name, middle_name, birth_year, sex, school, country_id) VALUES ('giang.dangquach@gmail.com','0356886876','Giang','Quach','Dang','2001',1,'Đại học Công nghệ Thông tin – Đại học Quốc gia TP.HCM',1);
INSERT INTO student(email, phone, first_name, last_name, middle_name, birth_year, sex, school, country_id) VALUES ('captainnemot1k60@gmail.com','0967571913','Hà','Nguyễn','Thanh','2003',1,'Đại học Bách Khoa Hà Nội',1);
INSERT INTO student(email, phone, first_name, last_name, middle_name, birth_year, sex, school, country_id) VALUES ('nguyenthuhat1k60@gmail.com','0858925333','Hà','Nguyễn','Thu','2003',2,'Đại học Bách Khoa Hà Nội',1);
INSERT INTO student(email, phone, first_name, last_name, middle_name, birth_year, sex, school, country_id) VALUES ('xuanhai2708@gmail.com','+79052735920','Hải','Cù','Xuân',null,1,'ITMO University',2);
INSERT INTO student(email, phone, first_name, last_name, middle_name, birth_year, sex, school, country_id) VALUES ('hieu.nt230603@gmail.com','0869347311','Hiếu','Nguyễn','Trung','2003',1,'Đại học Bách Khoa Hà Nội',1);
INSERT INTO student(email, phone, first_name, last_name, middle_name, birth_year, sex, school, country_id) VALUES ('beetit338@gmail.com','0866803327','Hoàng','Đặng','Việt','2003',1,'Đại học Bách Khoa Hà Nội',1);
INSERT INTO student(email, phone, first_name, last_name, middle_name, birth_year, sex, school, country_id) VALUES ('hungnv.itb@gmail.com','0395334342','Hùng','Nguyễn','Văn','2003',1,'Đại học Bách Khoa Hà Nội',1);
INSERT INTO student(email, phone, first_name, last_name, middle_name, birth_year, sex, school, country_id) VALUES ('nothung209@gmail.com','0982947213','Hưng','Nguyễn','Quốc','2002',1,'Đại học Bách Khoa Hà Nội',1);
INSERT INTO student(email, phone, first_name, last_name, middle_name, birth_year, sex, school, country_id) VALUES ('lmhuong711@gmail.com','0327182139','Hương','Lê','Minh','2001',2,'Đại học Công nghệ - Đại học Quốc gia Hà Nội',1);
INSERT INTO student(email, phone, first_name, last_name, middle_name, birth_year, sex, school, country_id) VALUES ('ngohuy658@gmail.com','0343473387','Huy','Ngo','Dang','2003',1,'Đại học Công nghệ - Đại học Quốc gia Hà Nội',1);
INSERT INTO student(email, phone, first_name, last_name, middle_name, birth_year, sex, school, country_id) VALUES ('quanghuy1604nd@gmail.com','0904845743','Huy','Trần','Quang','2002',1,'Học viện Công Nghệ Bưu Chính Viễn Thông',1);
INSERT INTO student(email, phone, first_name, last_name, middle_name, birth_year, sex, school, country_id) VALUES ('huyen.cnh70@gmail.com','0865776220','Huyen','Tran','Minh',null,2,'Đại học Bách Khoa Hà Nội',1);
INSERT INTO student(email, phone, first_name, last_name, middle_name, birth_year, sex, school, country_id) VALUES ('viettel.strixthekiet@gmail.com','0867288725','Kiệt','Nguyễn','Đôn Thế','2003',1,'VinUniversity',1);
INSERT INTO student(email, phone, first_name, last_name, middle_name, birth_year, sex, school, country_id) VALUES ('natibatian@gmail.com','09118984336','Lê','Trường','Hoàng','2002',1,'ITMO University',2);
INSERT INTO student(email, phone, first_name, last_name, middle_name, birth_year, sex, school, country_id) VALUES ('loidao99@gmail.com','0934829614','Lợi','Đào','QUANG','2003',1,'Đại học Bách Khoa Hà Nội',1);
INSERT INTO student(email, phone, first_name, last_name, middle_name, birth_year, sex, school, country_id) VALUES ('tienlong1106@gmail.com','+79967695589','Long','Nguyen','Tien','2000',1,'ITMO University',2);
INSERT INTO student(email, phone, first_name, last_name, middle_name, birth_year, sex, school, country_id) VALUES ('long.nq.hust@gmail.com','0869174722','Long','Nguyen','Quang','2001',1,'Đại học Bách Khoa Hà Nội',1);
INSERT INTO student(email, phone, first_name, last_name, middle_name, birth_year, sex, school, country_id) VALUES ('maintn124@gmail.com','0969918109','Mai','Nguyễn','Thị Ngọc','2004',2,'Đại học Công nghệ - Đại học Quốc gia Hà Nội',1);
INSERT INTO student(email, phone, first_name, last_name, middle_name, birth_year, sex, school, country_id) VALUES ('domanhitmo@gmail.com','0987779370','Mạnh','Đỗ','Dương',null,1,'ITMO University',2);
INSERT INTO student(email, phone, first_name, last_name, middle_name, birth_year, sex, school, country_id) VALUES ('minh.itptit@gmail.com','0337191138','Minh','Nguyen','Ngoc',null,1,'Học viện Công Nghệ Bưu Chính Viễn Thông',1);
INSERT INTO student(email, phone, first_name, last_name, middle_name, birth_year, sex, school, country_id) VALUES ('vuthenam.9.3.4@gmail.com','09637070997','Nam','Vũ','Thế','2001',1,'Đại học Công nghệ - Đại học Quốc gia Hà Nội',1);
INSERT INTO student(email, phone, first_name, last_name, middle_name, birth_year, sex, school, country_id) VALUES ('ngocongbang.ptit@gmail.com','0963340608','Ngô','Bằng','Công','2001',1,'Học viện Công Nghệ Bưu Chính Viễn Thông',1);
INSERT INTO student(email, phone, first_name, last_name, middle_name, birth_year, sex, school, country_id) VALUES ('nguyenhuythai15@gmail.com','0946590882','Nguyen','Thai','Huy','2003',1,'Đại học Công nghệ - Đại học Quốc gia Hà Nội',1);
INSERT INTO student(email, phone, first_name, last_name, middle_name, birth_year, sex, school, country_id) VALUES ('khoinguyen6103@gmail.com','0941777898','Nguyên','Phan','Khôi','2003',1,'Đại học Bách Khoa Hà Nội',1);
INSERT INTO student(email, phone, first_name, last_name, middle_name, birth_year, sex, school, country_id) VALUES ('vietquang16012003@gmail.com','0869963453','Quang','Dinh','Viet','2003',1,'Đại học Bách Khoa Hà Nội',1);
INSERT INTO student(email, phone, first_name, last_name, middle_name, birth_year, sex, school, country_id) VALUES ('caitendenhonhat@gmail.com','0833144638','Thành','Nguyễn','Chí','2002',1,'Đại học Bách Khoa Hà Nội',1);
INSERT INTO student(email, phone, first_name, last_name, middle_name, birth_year, sex, school, country_id) VALUES ('tiennguyen14122003@gmail.com','0866920919','Tiến','Nguyễn','Đình','2003',1,'Đại học Bách Khoa Hà Nội',1);
INSERT INTO student(email, phone, first_name, last_name, middle_name, birth_year, sex, school, country_id) VALUES ('thutrang25062k4@gmail.com','0328663946','Trang','Đỗ','Thu','2004',2,'Đại học Công nghệ - Đại học Quốc gia Hà Nội',1);
INSERT INTO student(email, phone, first_name, last_name, middle_name, birth_year, sex, school, country_id) VALUES ('jasmine150720@gmail.com','+79219430456','Tú','Nguyễn','Thị Mỹ','2000',2,'ITMO University',2);
INSERT INTO student(email, phone, first_name, last_name, middle_name, birth_year, sex, school, country_id) VALUES ('quangtuanitmo18@gmail.com','+79533626795','Tuấn','Nguyễn','Quang',null,1,'ITMO University',2);
INSERT INTO student(email, phone, first_name, last_name, middle_name, birth_year, sex, school, country_id) VALUES ('tibanh03@gmail.com','0328511409','Tuấn','Hoàng','Minh','2003',1,'Học viện Công Nghệ Bưu Chính Viễn Thông',1);
INSERT INTO student(email, phone, first_name, last_name, middle_name, birth_year, sex, school, country_id) VALUES ('7upnamk@gmail.com','09219430423','Tuấn','Phạm','Mạnh','2001',1,'ITMO University',2);
INSERT INTO student(email, phone, first_name, last_name, middle_name, birth_year, sex, school, country_id) VALUES ('hoangvinh1577@gmail.com','0946902235','Vinh','Bùi','Hoàng','2002',1,'Học viện Công Nghệ Bưu Chính Viễn Thông',1);
