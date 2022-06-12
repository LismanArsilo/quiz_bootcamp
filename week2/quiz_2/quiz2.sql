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
select e.employee_id,
e.first_name,
e.last_name,
e.salary, 
extract(year from age(now(),hire_date)) as masa_kerja, 
CASE WHEN extract(year from age(now(),hire_date)) >= 25 THEN salary*5 ELSE salary*3 END AS bonus 
from employees as e

11.
select extract(year from age(now(),hire_date)) as masa_kerja, 
CASE WHEN extract(year from age(now(),hire_date)) >= 25 THEN salary*5 ELSE salary*3 END AS bonus 
from employees
order by masa_kerja asc


12.


select * from employees


