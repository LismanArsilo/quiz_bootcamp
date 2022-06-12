-- //Membuat table
create table T_AGENT (
	AGENT_CODE CHARACTER (5) PRIMARY KEY,
	AGENT_NAME VARCHAR(50) NOT NULL,
	AGENT_OFFICE VARCHAR(25),
	BASIC_COMMISSION NUMERIC(10,2)
)

CREATE TABLE T_CLIENT (
	CLIENT_NUMBER CHARACTER(5) PRIMARY KEY,
	CLIENT_NAME VARCHAR (50) NOT NULL,
	BIRTH_DATE DATE 
)

CREATE TABLE T_POLICY (
	POLICY_NUMBER SERIAL PRIMARY KEY,
	POLICY_SUBMIT_DATE DATE NOT NULL,
	PREMIUM NUMERIC (10, 2),
	DISCOUNT INTEGER,
	COMMISSION NUMERIC (10, 2),
	CLIENT_NUMBER CHARACTER(5),
	AGENT_CODE CHARACTER (5),
	POLICY_STATUS VARCHAR(35),
	POLICY_DUE_DATE DATE,
	FOREIGN KEY(AGENT_CODE) REFERENCES T_AGENT (AGENT_CODE) ON UPDATE CASCADE ON DELETE CASCADE,
	FOREIGN KEY(CLIENT_NUMBER) REFERENCES T_CLIENT (CLIENT_NUMBER) ON UPDATE CASCADE ON DELETE CASCADE
)

-- //memasukan data
insert into T_CLIENT (CLIENT_NUMBER, CLIENT_NAME, BIRTH_DATE) 
VALUES ('CL001', 'WAYNE ROONEY', '11/05/1956');
insert into T_CLIENT (CLIENT_NUMBER, CLIENT_NAME, BIRTH_DATE) 
VALUES ('CL002', 'RYAN GIGGS', '03/09/1972');
insert into T_CLIENT (CLIENT_NUMBER, CLIENT_NAME, BIRTH_DATE) 
VALUES ('CL003', 'DAVID BECKHAM', '03/09/1985');
insert into T_CLIENT (CLIENT_NUMBER, CLIENT_NAME, BIRTH_DATE) 
VALUES ('CL004', 'MICHAEL OWEN', '09/03/2021');


insert into T_AGENT (AGENT_CODE, AGENT_NAME, AGENT_OFFICE) 
VALUES ('AG001', 'LIDYA', 'JAKARTA');
insert into T_AGENT (AGENT_CODE, AGENT_NAME, AGENT_OFFICE) 
VALUES ('AG002', 'RUDY', 'BALI');
insert into T_AGENT (AGENT_CODE, AGENT_NAME, AGENT_OFFICE) 
VALUES ('AG003', 'DICKY', 'BALI');
insert into T_AGENT (AGENT_CODE, AGENT_NAME, AGENT_OFFICE) 
VALUES ('AG004', 'DAVID', 'SURABAYA');
insert into T_AGENT (AGENT_CODE, AGENT_NAME, AGENT_OFFICE) 
VALUES ('AG005', 'FARIZ', 'SURABAYA');

insert into t_policy (policy_number, policy_submit_date, premium, discount, commission, client_number, agent_code, policy_status) 
values (001, '5/1/2018', 18600000.00, 10, 930000.00, 'CL001', 'AG001', 'INFORCE');
insert into t_policy (policy_number, policy_submit_date, premium, discount, commission, client_number, agent_code, policy_status) 
values (002, '10/1/2018', 2500000.00, 10, 125000.00, 'CL002', 'AG002', 'INFORCE');
insert into t_policy (policy_number, policy_submit_date, premium, discount, commission, client_number, agent_code, policy_status) 
values (003, '10/1/2018', 2500000.00, 10, 125000.00, 'CL003', 'AG003', 'TERMINATE');
insert into t_policy (policy_number, policy_submit_date, premium, discount, commission, client_number, agent_code, policy_status) 
values (004, '25/1/2018', 4000000.00, 10, 200000.00, 'CL003', 'AG002', 'PROPOSAL');
insert into t_policy (policy_number, policy_submit_date, premium, discount, commission, client_number, agent_code, policy_status) 
values (005, '25/1/2018', 2625000.00, 10, 131250.00, 'CL004', 'AG002', 'PROPOSAL');


-- 1. 
	select a.policy_number, a.policy_submit_date, a.premium, a.commission, a.client_number,
	a.agent_code, a.policy_status
	from t_policy a join t_client b on a.client_number = b.client_number,
	date(a.policy_submit_date) as submit_police,
	extract(month from b.birth_date) as month
	where (submit_police > '2018-01-015') and (month = 09)

-- 2.
	select a.policy_number, a.policy_submit_date, a.premium, a.commission, a.client_number,
	a.agent_code, a.policy_status, b.agent_office
	from t_policy a join t_agent b on a.agent_code = b.agent_code
	where (a.policy_status = 'INFORCE') and (b.agent_office = 'JAKARTA')


-- 3.  
		select b.agent_code, b.agent_name, b.agent_office,
    (a.commission/a.premium)*100 as Basic_Commission
    from t_policy a join t_agent b on a.agent_code = b.agent_code
   
-- 4. 
	select policy_number, policy_submit_date,
	date_trunc('month', date(policy_submit_date) + interval '30 day') + interval '1 month' - interval '1 day' 
	as policy_due_date from t_policy

-- 5.
  select * from (
	select policy_number, policy_submit_date, premium, discount, client_number,
	agent_code, policy_status,
	(premium*discount/100) as diskon,
	(premium - (premium*discount/100)) as setelah_discount
	from t_policy)a
	where diskon < 1000000
	order by diskon asc



//show table
select * from t_policy
select * from t_client
select * from t_agent
