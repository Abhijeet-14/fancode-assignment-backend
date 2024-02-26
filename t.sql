-- SET profiling = 1;
-- 
-- select * from mydb.matches  left join mydb.tours 
-- on matches.tourId = tours.id where tours.name = "Indian Premier League, 2023";
-- 
-- SHOW PROFILES;

-- set statistics time on 

select * from mydb.matches  left join mydb.tours 
on matches.tourId = tours.id where tours.name = "Indian Premier League, 2023";
-- 
-- set statistics time off


-- INSERT 10K
-- set statistics time on
-- 
-- SET @insertsCount = 10000;
-- 
-- -- Set the start date for matches
-- SET @startDate = '2023-04-09';
-- 
-- -- Loop to generate and execute insert statements
-- SET @i = 1;
-- WHILE @i <= @insertsCount DO
--     SET @matchName = CONCAT('Match', @i);
--     SET @tourId = 1;
--     SET @format = 'T20';
--     SET @startTime = CONCAT(@startDate, ' 18:00:00');
--     SET @endTime = CONCAT(@startDate, ' 23:00:00');
-- 
--     -- Execute the insert statement
--     SET @insertQuery = CONCAT("INSERT IGNORE INTO mydb.matches (name, tourId, format, startTime, endTime) 
-- 	VALUES ('", @matchName, "', ", @tourId, ", '", @format, "', '", @startTime, "', '", @endTime, "');");
--     PREPARE stmt FROM @insertQuery;
--     EXECUTE stmt;
--     DEALLOCATE PREPARE stmt;
-- 
--     -- Increment the loop counter
--     SET @i = @i + 1;
-- END WHILE;
-- -- set statistics time off