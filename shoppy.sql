use shoppy;
select database();
show tables;
select * from information_schema.views where table_schema = 'shoppy';
select * from member; -- pwd 암호화

 select p.pid,
		p.name,
        p.price,
        p.info,
        p.rate,
        concat('/images',p.image) as image,
        p.img_list as imgList,
        json_object(
			"title_en", pd.title_en,
			"title_ko", pd.title_ko,
			"list", pd.list
		) as ditailInfo
		from product p, product_detailinfo pd
        where p.pid = pd.pid and p.pid = 1;