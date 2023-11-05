var i, n, nmax, count: integer;
begin
  n := 1;
  nmax := 18;
  count := 1;

  while (count < nmax) do
  begin
    for i := 1 to n do
    begin
      if (count <= nmax) then
      begin
        write(' ', count, ' ');
        count := count + 1;
      end;
    end;
    n := n + 1;
    writeln();
  end;
end.

