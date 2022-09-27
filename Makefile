feature:
	node ./scripts/feature/runner.js $(name)
	
shared:
	node ./scripts/componentNode/runner.js shared $(name) $(for)

container:
	node ./scripts/componentNode/runner.js containers $(name) $(for)

layout:
	node ./scripts/componentNode/runner.js layouts $(name) $(for)

page:
	node ./scripts/componentNode/runner.js pages $(name) $(for)

integrity-check:
	node ./scripts/integrityCheck/runner.js $(for)