1. 
select a.region_id, a.region_name, b.country_id, b.country_name
from regions a join countries b on a.region_id = b.region_id order by region_id ASC

2.
select a.region_id, a.region_name, count (b.region_id)total_countries
from regions a join countries b on a.region_id = b.region_id 
group by a.region_id, a.region_name order by region_id ASC

3.
select b.country_id, b.country_name, c.location_id, c.street_address, 
c.postal_code, c.city, c.state_province 
from regions a join countries b on a.region_id = b.region_id 
join locations c on b.country_id = c.country_id where a.region_name like 'E%'
order by b.country_id asc

4.
select b.country_id, b.country_name, c.location_id, c.street_address, 
c.postal_code, c.city, c.state_province 
from regions a join countries b on a.region_id = b.region_id 
join locations c on b.country_id = c.country_id where a.region_name like 'E%'
order by b.country_id asc

5. 
select a.region_name, count (department_name)total_department
from regions a join countries b on a.region_id = b.region_id 
join locations c on b.country_id = c.country_id  
join departments d on c.location_id = d.location_id
group by a.region_name

6.
select b.country_name, count (department_name)total_department
from regions a join countries b on a.region_id = b.region_id 
join locations c on b.country_id = c.country_id  
join departments d on c.location_id = d.location_id
group by b.country_name
order by b.country_name asc

7.
select b.country_name, count (department_name)total_department
from regions a join countries b on a.region_id = b.region_id 
join locations c on b.country_id = c.country_id  
join departments d on c.location_id = d.location_id
group by b.country_name
having count(department_name) > 3

8.
select d.department_id, d.department_name, count (employee_id)total_emps
from regions a join countries b on a.region_id = b.region_id 
join locations c on b.country_id = c.country_id  
join departments d on c.location_id = d.location_id
join employees e on d.department_id = e.department_id
group by d.department_id, d.department_name
order by total_emps ASC

9.
select d.department_id, d.department_name, count (employee_id)total_emps
from regions a join countries b on a.region_id = b.region_id 
join locations c on b.country_id = c.country_id  
join departments d on c.location_id = d.location_id
join employees e on d.department_id = e.department_id
where a.region_name like 'A%'
group by d.department_id, d.department_name
order by total_emps asc

10.
select employee_id,
first_name,
last_name,
salary, 
extract(year from age(now(),hire_date)) as masa_kerja, 
CASE WHEN extract(year from age(now(),hire_date)) >= 25 THEN salary*5 ELSE salary*3 END AS bonus 
from employees

11.
select extract(year from age(now(),hire_date)) as masa_kerja, 
CASE WHEN extract(year from age(now(),hire_date)) >= 25 THEN salary*5 ELSE salary*3 END AS bonus 
from employees
order by masa_kerja asc

12. select 
		sum(coalesce (b.pertama, 0))"15 <=masa kerja <=25",
	 	sum(coalesce (b.kedua, 0))"25 <=masa kerja <=30",
	 	sum(coalesce (b.ketiga, 0))"30 <=masa kerja <=35"
			from
				(select a.masa_kerja,
				case when a.masa_kerja >= 15 and a.masa_kerja <= 25 then count (1) end pertama,
				case when a.masa_kerja > 25 and a.masa_kerja <= 30 then count (1) end kedua,
				case when a.masa_kerja > 30 and a.masa_kerja <= 35 then count (1) end ketiga
			from
				(select hire_date,
				extract (year from age(now(),hire_date)) as masa_kerja
			from employees)a group by a.masa_kerja)b
	
	13.
	select b.department_id, b.department_name, 
	 	sum(coalesce (b.pertama, 0))"15 <=masa kerja <=25",
	 	sum(coalesce (b.kedua, 0))"25 <=masa kerja <=30",
	 	sum(coalesce (b.ketiga, 0))"30 <=masa kerja <=35"
		from
			(select a.masa_kerja, a.department_name, a.department_id,
			case when a.masa_kerja >= 15 and a.masa_kerja <= 25 then count (1) end pertama,
			case when a.masa_kerja >25 and a.masa_kerja <= 30 then count (1) end kedua,
			case when a.masa_kerja >30 and a.masa_kerja <= 35 then count (1) end ketiga
		from 
			(select employee_id, hire_date, i.department_id , i.department_name,
			extract (year from age(now(),hire_date)) as masa_kerja
		from employees h join departments i on h.department_id = i.department_id)a 
				group by a.masa_kerja, a.department_name, a.department_id)b
					group by b.department_id, b.department_name
					order by b.department_name asc
	
-- 	show table
	select * from regions
	select * from countries
	select * from locations
	select * from departments
	select * from employees
	select * from jobs
	select * from dependents
	select * from project_assignment
	select * from projects

