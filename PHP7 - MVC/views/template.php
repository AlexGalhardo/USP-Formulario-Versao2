<!DOCTYPE html>

<html lang="pt-br">

	<head>
		<?php $this->loadHeaderInTemplate($viewName, $viewData); ?>
	</head>

	<body>
		<?php $this->loadViewInTemplate($viewName, $viewData); ?>

		<?php $this->loadFooterInTemplate($viewName, $viewData); ?>
	</body>

</html>